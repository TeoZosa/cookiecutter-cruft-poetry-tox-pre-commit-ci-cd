window.BENCHMARK_DATA = {
  "lastUpdate": 1612203622417,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "f4a97d4a7098ce41e292b34d1d2d9565ea79f48e",
          "message": ":memo: Add link to local `icontract` benchmarks",
          "timestamp": "2021-02-01T10:13:45-08:00",
          "tree_id": "03ab79f6c3709ef21802f16ce2c4fca3baefbc00",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/f4a97d4a7098ce41e292b34d1d2d9565ea79f48e"
        },
        "date": 1612203574811,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15854.556338220684,
            "unit": "iter/sec",
            "range": "stddev: 0.000006840235314932715",
            "extra": "mean: 63.07335119742792 usec\nrounds: 12987"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4824866.955164829,
            "unit": "iter/sec",
            "range": "stddev: 1.2055324446415738e-8",
            "extra": "mean: 207.25960099872168 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 15073.222096502755,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033756107222066147",
            "extra": "mean: 66.34281599499666 usec\nrounds: 9728"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 208445.9792798853,
            "unit": "iter/sec",
            "range": "stddev: 4.4446514649431273e-7",
            "extra": "mean: 4.797406039947052 usec\nrounds: 45663"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15593.8783249686,
            "unit": "iter/sec",
            "range": "stddev: 0.000009648427221392899",
            "extra": "mean: 64.12772878949687 usec\nrounds: 13967"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5051727.11626801,
            "unit": "iter/sec",
            "range": "stddev: 7.61677336595923e-9",
            "extra": "mean: 197.9521017238159 nsec\nrounds: 112360"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3948eba6155375e663928a96927d01611a93e558",
          "message": "Merge pull request #54 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.0.1\n\n⬆️ Bump pip from 21.0 to 21.0.1 in /.github/workflows",
          "timestamp": "2021-02-01T10:16:32-08:00",
          "tree_id": "240013769a0fc3079bfaaa92784fd51f1e008bbd",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/3948eba6155375e663928a96927d01611a93e558"
        },
        "date": 1612203621630,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14896.208033869749,
            "unit": "iter/sec",
            "range": "stddev: 0.000030186180581148757",
            "extra": "mean: 67.13117846678053 usec\nrounds: 12316"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4476726.432679379,
            "unit": "iter/sec",
            "range": "stddev: 1.5465865540691762e-7",
            "extra": "mean: 223.37750922190043 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13271.693640637428,
            "unit": "iter/sec",
            "range": "stddev: 0.000013098463127402872",
            "extra": "mean: 75.34833360966361 usec\nrounds: 2410"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 197252.92860974648,
            "unit": "iter/sec",
            "range": "stddev: 0.000003326513081533976",
            "extra": "mean: 5.069633221915007 usec\nrounds: 66667"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15084.965546586569,
            "unit": "iter/sec",
            "range": "stddev: 0.000016726787077180746",
            "extra": "mean: 66.29116897295667 usec\nrounds: 8238"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4405871.528289044,
            "unit": "iter/sec",
            "range": "stddev: 3.7864688540293553e-7",
            "extra": "mean: 226.96985002383667 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}