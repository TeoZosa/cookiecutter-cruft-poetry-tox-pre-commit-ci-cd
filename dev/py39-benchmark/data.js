window.BENCHMARK_DATA = {
  "lastUpdate": 1629123062149,
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
          "id": "5f2bde9069ca72e0ce4521bb58ce5f0023e2e43e",
          "message": "Merge pull request #283 from TeoZosa/dependabot/pip/hypothesis-6.14.7",
          "timestamp": "2021-08-16T13:21:26Z",
          "tree_id": "9da43e21ebb9fb4983fbe9af17bbba3343944f23"
        },
        "date": 1629123059412,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16486.717100922055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018386050988921412",
            "extra": "mean: 60.65488925894609 usec\nrounds: 5409"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4961804.34998281,
            "unit": "iter/sec",
            "range": "stddev: 1.42495025019578e-8",
            "extra": "mean: 201.53958710677716 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14420.269549598113,
            "unit": "iter/sec",
            "range": "stddev: 0.000007078680607400856",
            "extra": "mean: 69.34683131688544 usec\nrounds: 9337"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 151641.01359133326,
            "unit": "iter/sec",
            "range": "stddev: 3.7921930852310903e-7",
            "extra": "mean: 6.594521998480976 usec\nrounds: 39525"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16435.55123810957,
            "unit": "iter/sec",
            "range": "stddev: 0.000004325099437104675",
            "extra": "mean: 60.84371527991542 usec\nrounds: 11211"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4930890.188075128,
            "unit": "iter/sec",
            "range": "stddev: 1.3506508585641898e-8",
            "extra": "mean: 202.80313733593007 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}