window.BENCHMARK_DATA = {
  "lastUpdate": 1629730171051,
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
          "id": "66d4297fbe810376120c2424a9083e10bf49dac1",
          "message": "Merge pull request #300 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-3.24.3",
          "timestamp": "2021-08-23T14:09:16Z",
          "tree_id": "2f11ed8e802db58ee7ce4e09cb8b16bb6976ff45"
        },
        "date": 1629730169818,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14985.672137619165,
            "unit": "iter/sec",
            "range": "stddev: 0.000009214242194937628",
            "extra": "mean: 66.73040693914942 usec\nrounds: 9166"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5008059.572993106,
            "unit": "iter/sec",
            "range": "stddev: 1.0893844863649844e-8",
            "extra": "mean: 199.67813589768193 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12272.978763232166,
            "unit": "iter/sec",
            "range": "stddev: 0.000018141772731805776",
            "extra": "mean: 81.47981181193242 usec\nrounds: 9533"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 146638.10120893564,
            "unit": "iter/sec",
            "range": "stddev: 7.685045069190617e-7",
            "extra": "mean: 6.819510016534934 usec\nrounds: 51814"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14661.830049462313,
            "unit": "iter/sec",
            "range": "stddev: 0.000010450711296742341",
            "extra": "mean: 68.2043098730825 usec\nrounds: 14535"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4886856.194850962,
            "unit": "iter/sec",
            "range": "stddev: 9.838645463001098e-8",
            "extra": "mean: 204.63053548739808 nsec\nrounds: 181819"
          }
        ]
      }
    ]
  }
}