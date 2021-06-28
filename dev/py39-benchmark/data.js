window.BENCHMARK_DATA = {
  "lastUpdate": 1624889373425,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "20f8becc26ce4aaa7dfcdd277de013026ef25e62",
          "message": "Merge pull request #228 from TeoZosa/dependabot/pip/xdoctest-0.15.5",
          "timestamp": "2021-06-28T13:56:27Z",
          "tree_id": "e4f85a5b78e3583cc6dcafa1b915fc944a987f62"
        },
        "date": 1624889371910,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15841.039183839619,
            "unit": "iter/sec",
            "range": "stddev: 0.000014615127724876621",
            "extra": "mean: 63.127171670666606 usec\nrounds: 7893"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5110969.434690216,
            "unit": "iter/sec",
            "range": "stddev: 1.0151043764564127e-8",
            "extra": "mean: 195.65759740463997 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13588.670200311224,
            "unit": "iter/sec",
            "range": "stddev: 0.000019787584423303536",
            "extra": "mean: 73.59071824239997 usec\nrounds: 9533"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 150114.389778454,
            "unit": "iter/sec",
            "range": "stddev: 4.463422494675541e-7",
            "extra": "mean: 6.661586550602163 usec\nrounds: 39526"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16185.7881377435,
            "unit": "iter/sec",
            "range": "stddev: 0.000006298672062567806",
            "extra": "mean: 61.7825954157962 usec\nrounds: 13263"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5041848.795404277,
            "unit": "iter/sec",
            "range": "stddev: 1.2119413666832288e-8",
            "extra": "mean: 198.33994246554238 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}