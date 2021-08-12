window.BENCHMARK_DATA = {
  "lastUpdate": 1628809680791,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "9713e252d41e9c0791020aa39b1448bcef1fd5a6",
          "message": ":cookie: :wrench: Move Mypy configurations to `pyproject.toml`\n\nAll tooling configurations are now fully centralized in\n`pyproject.toml`.\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>",
          "timestamp": "2021-08-12T23:03:03Z",
          "tree_id": "09e35742b0c6ace4fbfb9bdaea00fa36e7c0f2c7"
        },
        "date": 1628809679215,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14432.839534287019,
            "unit": "iter/sec",
            "range": "stddev: 0.000010448414512137751",
            "extra": "mean: 69.28643512071028 usec\nrounds: 6173"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5013685.6518024,
            "unit": "iter/sec",
            "range": "stddev: 8.756660032875586e-8",
            "extra": "mean: 199.4540682144054 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12609.222107320511,
            "unit": "iter/sec",
            "range": "stddev: 0.000017493551488451738",
            "extra": "mean: 79.30703349411475 usec\nrounds: 9524"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 154676.18929572153,
            "unit": "iter/sec",
            "range": "stddev: 3.620954216887479e-7",
            "extra": "mean: 6.465119192250885 usec\nrounds: 47847"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14337.946529854822,
            "unit": "iter/sec",
            "range": "stddev: 0.000009439374789645603",
            "extra": "mean: 69.74499436985454 usec\nrounds: 10835"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5066646.493190403,
            "unit": "iter/sec",
            "range": "stddev: 9.55533120249838e-9",
            "extra": "mean: 197.36920689968 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}