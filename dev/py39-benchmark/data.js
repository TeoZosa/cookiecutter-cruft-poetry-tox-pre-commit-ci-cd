window.BENCHMARK_DATA = {
  "lastUpdate": 1627306527946,
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
          "id": "61a7f4faf04ebabab3619238a5c7d8b117512cb4",
          "message": "Merge pull request #253 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.2.1",
          "timestamp": "2021-07-26T13:12:31Z",
          "tree_id": "a0d952a072730d51ddefd539a27595ced9c8b032"
        },
        "date": 1627306525981,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15257.075784542008,
            "unit": "iter/sec",
            "range": "stddev: 0.00001537436541091469",
            "extra": "mean: 65.54335929911083 usec\nrounds: 5764"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4066772.822188547,
            "unit": "iter/sec",
            "range": "stddev: 3.059572618376845e-8",
            "extra": "mean: 245.89522053993625 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13079.402388922226,
            "unit": "iter/sec",
            "range": "stddev: 0.0000105682518779831",
            "extra": "mean: 76.45609258470122 usec\nrounds: 4990"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 129785.76328907562,
            "unit": "iter/sec",
            "range": "stddev: 7.590817180459727e-7",
            "extra": "mean: 7.705005346177075 usec\nrounds: 3928"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15811.123558994208,
            "unit": "iter/sec",
            "range": "stddev: 0.000005848822230042522",
            "extra": "mean: 63.24661218848972 usec\nrounds: 11601"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4094156.0558226476,
            "unit": "iter/sec",
            "range": "stddev: 1.930885312544289e-8",
            "extra": "mean: 244.25058213785564 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}